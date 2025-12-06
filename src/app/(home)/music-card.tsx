import Card from '@/components/card'  
import { useCenterStore } from '@/hooks/use-center'  
import { CARD_SPACING } from '@/consts'  
import { styles as hiCardStyles } from './hi-card'  
import { styles as socialButtonsStyles } from './social-buttons'  
  
export const styles = {  
  width: 400,  // 控制宽度  
  height: 352, // Spotify iframe 的固定高度  
  order: 5     // 控制渲染顺序  
}  
  
export default function MusicCard({ url }: { url: string }) {  
  const center = useCenterStore()  
    
  return (  
    <Card  
      order={styles.order}  
      width={styles.width}  
      height={styles.height}  
      x={center.x + hiCardStyles.width / 2 - socialButtonsStyles.width}  
      y={center.y + hiCardStyles.height / 2 + CARD_SPACING + socialButtonsStyles.height + CARD_SPACING}>  
      <iframe  
        style={{ borderRadius: 12 }}  
        src={url.replace("open.spotify.com/playlist", "open.spotify.com/embed/playlist")}  
        width="100%"  
        height="100%"  
        frameBorder="0"  
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"  
        loading="lazy"  
      />  
    </Card>  
  )  
}
