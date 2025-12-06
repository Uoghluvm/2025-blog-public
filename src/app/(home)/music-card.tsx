import Card from '@/components/card'
import { useCenterStore } from '@/hooks/use-center'
import { useConfigStore } from './stores/config-store'
import { CARD_SPACING } from '@/consts'
import MusicSVG from '@/svgs/music.svg'
import PlaySVG from '@/svgs/play.svg'
import { HomeDraggableLayer } from './home-draggable-layer'

export default function MusicCard({ url }: { url: string }) {  
  return (  
    <div className="rounded-xl overflow-hidden shadow-lg">  
      <iframe  
        style={{ borderRadius: 12 }}  
        src={url.replace("open.spotify.com/playlist", "open.spotify.com/embed/playlist")}  
        width="100%"  
        height="352"  
        frameBorder="0"  
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"  
        loading="lazy"  
      />  
    </div>  
  );  
}

