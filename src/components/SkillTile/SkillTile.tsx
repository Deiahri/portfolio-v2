import styles from "./SkillTile.module.css";

export default function SkillTile({
  color,
  icon,
  skill,
  containerStyle,
  scale = 0.8,
  showIcon=true
}: {
  color: string;
  icon: string;
  skill: string;
  containerStyle?: React.CSSProperties;
  scale?: number;
  showIcon?: boolean
}) {
  return (
    <div
      style={{
        height: showIcon ? `${4 * scale}rem` : 'auto',
        padding: `${0.5 * scale}rem`,
        borderRadius: `${0.8 * scale}rem`,
        gap: `${0.5 * scale}rem`,
        ...containerStyle,
      }}
      className={styles.skillTile}
    >
      {showIcon&&<SkillIcon scale={scale} color={color} iconSrc={icon} />}
      <span style={{ fontSize: `${1.4 * scale}rem`, fontWeight: 300 }}>
        {skill}
      </span>
      {/* <div style={{objectFit: 'cover', width: '5rem', height: '5rem', borderRadius: '0.8rem', overflow: 'hidden', backgroundColor: 'red'}} /> */}
    </div>
  );
}

export function SkillIcon({
  color,
  iconSrc,
  scale = 1,
}: {
  color: string;
  iconSrc: string;
  scale: number;
}) {
  return (
    <div
      style={{
        padding: `${0.4 * scale}rem`,
        backgroundColor: color,
        borderRadius: `${0.6 * scale}rem`,
        height: "100%",
        aspectRatio: 1 / 1,
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <img
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          userSelect: "none",
          borderRadius: `${scale * 0.25}rem`,
        }}
        src={iconSrc}
      />
    </div>
  );
}
