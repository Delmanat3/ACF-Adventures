
import styles from "./hathaways.module.css"
export default function Hath({
data
}){
const {heading,image,footer}=data
return(
<div className={styles.numba1}>
<div
  className={`${styles.innyoutty}  `}
>
  <img
    className={`${styles.notHathaway}`}
    src={image}
  />
  <div className="px-6 py-4">
    <div
      style={{ color: "white" }}
      className="font-bold text-xl,"
    >
      {heading}
    </div>
    <p style={{ color: "white" }} className="text-xs">
      {footer}
    </p>
  </div>
</div>
</div>
)
}