import ThreePeat from "@/components/organisms/ThreePeat"


export default function HathRepeat(attributes){
    const {data}=attributes
    console.log(data)

 const items=[]
    for(let i=0; i<attributes.data.peaty;i++){
         items.push({
            heading:data[`peaty_${i}_heading`],
            image:data[`peaty_${i}_image`],
            footer:data[`peaty_${i}_footer`]
        })
        }
        const x=data.peaty_0_heading
        console.log(items)
    return(
        <>
        {data ?(
            <ThreePeat  data={items}/>
        ):(
            <h1>nothing hur</h1>
        )}
        </>
    )
}