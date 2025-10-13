import styles from './YouTubeEmbed.module.css';

import YouTube from 'react-youtube';


const videoOpts = {
  height: '100%',
  width: '100%',
  playerVars: {
    origin: window.location.origin
  }
};



export default function YouTubeEmbed({ videoID, style }: { videoID: string, style?: React.CSSProperties }) {
  return (<div className={styles.videoWrapper} style={style}>
    <YouTube videoId={videoID} opts={videoOpts} />
  </div>);
}