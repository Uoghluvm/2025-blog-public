import Card from '@/components/card'  
import { useCenterStore } from '@/hooks/use-center'  
import { useConfigStore } from './stores/config-store'  
import { CARD_SPACING } from '@/consts'  
import { HomeDraggableLayer } from './home-draggable-layer'  
  
export default function MusicCard({ url }: { url: string }) {  
	const center = useCenterStore()  
	const { cardStyles } = useConfigStore()  
	const styles = cardStyles.musicCard  
	const hiCardStyles = cardStyles.hiCard  
	const clockCardStyles = cardStyles.clockCard  
	const calendarCardStyles = cardStyles.calendarCard  
  
	const x = styles.offsetX !== null ? center.x + styles.offsetX : center.x + CARD_SPACING + hiCardStyles.width / 2 - styles.offset  
	const y = styles.offsetY !== null ? center.y + styles.offsetY : center.y - clockCardStyles.offset + CARD_SPACING + calendarCardStyles.height + CARD_SPACING  
  
	return (  
		<HomeDraggableLayer cardKey='musicCard' x={x} y={y} width={styles.width} height={styles.height}>  
			<Card order={styles.order} width={styles.width} height={styles.height} x={x} y={y} className='overflow-hidden'>  
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
		</HomeDraggableLayer>  
	)  
}
