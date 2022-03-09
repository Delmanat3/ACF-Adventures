import PropTypes from 'prop-types'
import AnnieHathaways from "@/components/organisms/AnnieHathaways"
import styles from "./hathaways.module.css"


/**
 * Render the headache component
 *
 * @param  {object}  props          The props object.
 * @param {string}props.image     card image
 *  @param {string}props.heading
 * @param props.footer card bottom text
 * @return {Element}               
 */
export default function BlockAnnie({image, heading,footer}){
return(
  <div
  className={styles.numba1}
>
<div
  
  className={styles.innyoutty}
>
  <img
      className={styles.notHathaway}
    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    
    alt="Avatar"
  />
  <div class="px-6 py-4">
    <div style="color: white" class="font-bold text-xl,">
      Annie Hathaways
    </div>
    <p style="color: white" class="text-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing
      elit.
    </p>
  </div>
</div>
</div>

)
}

AnnieHathaways.PropTypes={
    image:PropTypes.string,
    header:PropTypes.string,
    footer:PropTypes.string

}