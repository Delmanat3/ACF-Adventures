import styles from './hathaways.module.css'

export default function ThreePeat({data}) {
  return (
    <>
      <h1>Repeater Block</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {data.map((item, i) => (
          <div key={i} className={styles.numba1}>
            <div className={`${styles.innyoutty}  `}>
              <img className={`${styles.notHathaway}`} src={item.image} />
              <div className="px-6 py-4">
                <div style={{color: 'white'}} className="font-bold text-xl,">
                  {item.heading}
                </div>
                <p style={{color: 'white'}} className="text-xs">
                  {item.footer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
