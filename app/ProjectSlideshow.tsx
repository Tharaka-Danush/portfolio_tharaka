'use client';
import {useEffect, useRef, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play, Expand} from 'lucide-react';

type Slide={src:string;alt:string};
type Props={title:string;slides:Slide[];variant?:'card'|'detail';initialIndex?:number;interval?:number;suspended?:boolean;onOpen?:(index:number)=>void};
export default function ProjectSlideshow({title,slides,variant='card',initialIndex=0,interval=5600,suspended=false,onOpen}:Props){
 const [index,setIndex]=useState(Math.min(initialIndex,slides.length-1));
 const [auto,setAuto]=useState(true);
 const [hovered,setHovered]=useState(false);
 const [focused,setFocused]=useState(false);
 const [visible,setVisible]=useState(false);
 const [hidden,setHidden]=useState(false);
 const [reduced,setReduced]=useState(false);
 const root=useRef<HTMLDivElement>(null);
 const touchX=useRef<number|null>(null);
 const swiped=useRef(false);
 useEffect(()=>{
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  const preference=()=>setReduced(media.matches);
  const visibility=()=>setHidden(document.hidden);
  preference();visibility();media.addEventListener('change',preference);document.addEventListener('visibilitychange',visibility);
  let observer:IntersectionObserver|undefined;
  if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting),{threshold:.15});if(root.current)observer.observe(root.current);}else setVisible(true);
  return()=>{media.removeEventListener('change',preference);document.removeEventListener('visibilitychange',visibility);observer?.disconnect();};
 },[]);
 const playing=auto&&!hovered&&!focused&&visible&&!hidden&&!reduced&&!suspended&&slides.length>1;
 useEffect(()=>{if(!playing)return;const timer=window.setInterval(()=>setIndex(current=>(current+1)%slides.length),interval);return()=>window.clearInterval(timer);},[playing,interval,slides.length]);
 function choose(next:number){setAuto(false);setIndex((next+slides.length)%slides.length);}
 const slide=slides[index];
 if(!slide)return null;
 return <div ref={root} className={'slideshow slideshow-'+variant} role="region" aria-roledescription="carousel" aria-label={title+' screenshots'}
  onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
  onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setFocused(false);}}
  onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();choose(index+1);}if(event.key==='ArrowLeft'){event.preventDefault();choose(index-1);}}}
  onTouchStart={event=>{touchX.current=event.touches[0]?.clientX??null;swiped.current=false;}}
  onTouchEnd={event=>{if(touchX.current!==null){const distance=event.changedTouches[0].clientX-touchX.current;if(Math.abs(distance)>45){swiped.current=true;choose(index+(distance<0?1:-1));}touchX.current=null;}}}>
  <div className="slide-viewport">
   {variant==='card'?<button type="button" className="slide-open" aria-label={'Open '+title+' screenshot '+(index+1)} onClick={()=>{if(!swiped.current)onOpen?.(index);}}><img key={slide.src} className="project-screenshot slideshow-image" src={slide.src} alt={slide.alt} loading="lazy" width={1600} height={900}/><span className="slide-expand"><Expand size={16}/><span>View gallery</span></span></button>:<img key={slide.src} className="slideshow-image" src={slide.src} alt={slide.alt} width={1600} height={900}/>}
  </div>
  {slides.length>1&&<div className="slideshow-controls">
   <button type="button" className="slide-arrow" aria-label={'Previous '+title+' screenshot'} onClick={()=>choose(index-1)}><ChevronLeft size={19}/></button>
   <span className="slide-counter" aria-live={auto?'off':'polite'} aria-atomic="true">{String(index+1).padStart(2,'0')} <span>/ {String(slides.length).padStart(2,'0')}</span></span>
   <div className="slide-dots" role="group" aria-label="Choose screenshot">{slides.map((item,i)=><button type="button" key={item.src} className={index===i?'active':''} aria-label={'Show screenshot '+(i+1)} aria-pressed={index===i} onClick={()=>choose(i)}><span/></button>)}</div>
   {!reduced&&<button type="button" className="slide-play" aria-label={(auto?'Pause':'Play')+' '+title+' slideshow'} onClick={()=>{setAuto(!auto);setFocused(false);}}>{auto?<Pause size={16}/>:<Play size={16}/>}</button>}
   <button type="button" className="slide-arrow" aria-label={'Next '+title+' screenshot'} onClick={()=>choose(index+1)}><ChevronRight size={19}/></button>
  </div>}
  {variant==='detail'&&<><div className="slide-description" aria-live={auto?'off':'polite'}><p>{slide.alt}</p><a href={slide.src} target="_blank" rel="noreferrer">Open full size <Expand size={14}/></a></div><div className="slide-thumbnails" role="group" aria-label="Screenshot thumbnails">{slides.map((item,i)=><button type="button" key={item.src} className={index===i?'active':''} aria-label={'View '+title+' thumbnail '+(i+1)} aria-pressed={index===i} onClick={()=>choose(i)}><img src={item.src} alt="" loading="lazy" width={160} height={90}/><span>{String(i+1).padStart(2,'0')}</span></button>)}</div></>}
 </div>;
}
