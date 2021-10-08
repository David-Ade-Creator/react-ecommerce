import { Button, Divider, Rate } from 'antd'
import React from 'react'
import { CLOTHESIZEOPTIONS, SHOESIZEOPTIONS } from '../Data/constants';

function ListDetails({shoeSize}) {
    const [selectedSize, setSelectedSize] = React.useState("");
    const [displayImage,setDisplayImage] = React.useState("");

    const demoImage=[
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-WrLlWX.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c9e622c0-f478-4ffb-8def-fc11280e45bf/air-force-1-07-shoe-WrLlWX.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/15bcd4d6-2636-4e9d-8b90-47d556a2cc0a/air-force-1-07-shoe-WrLlWX.png",
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1241c085-a703-49dd-8a84-5694d5fd8feb/air-force-1-07-shoe-WrLlWX.png",
    ]

    React.useEffect(()=>{
        setDisplayImage(demoImage[0])
    },[]);

   

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mb-3">
                        <img
                    alt="example"
                    src={displayImage}
                    style={{height:"400px",width:"100%"}}
                  />
                        </div>
                       {demoImage.map((image,index)=> <div className="col-lg-3" key={index}>
                        <img
                    alt="example"
                    src={image}
                    // className="card-img"
                    style={{height:"150px",width:"100%"}}
                    onClick={()=>setDisplayImage(image)}
                  />
                        </div>)}
                        
                        
                    </div>
                    
                </div>
                <div className="col-lg-6 p-4" style={{display:"flex",alignItems:"flex-start", justifyContent:"center"}}>
                        <div>
                            <h5>
                            BOB MARLEY © ZION ROOTSWEAR PRINT T-SHIRT
                            </h5>
                            <p>LOOSE-FITTING T-SHIRT WITH A ROUND NECKLINE AND SHORT SLEEVES. SLOGAN AND PHOTO PRINTS OF BOB MARLEY © FIFTY-SIX HOPE ROAD MUSIC, LTD.</p>
                            <p>₹ 1,990.00</p>
                            <p>incl. of taxes and duties</p>
                            <Divider/>
                            <h6>Select Size</h6>
                            {shoeSize  ? <div>
                                {SHOESIZEOPTIONS.map((size,index)=><Button key={index} style={{margin:".3rem",width:"4rem"}} onClick={()=>setSelectedSize(size.value)} type={selectedSize === size.value ? "primary" : "dashed"}>{size.label}</Button>)}
                            </div>:
                            <div>
                                {CLOTHESIZEOPTIONS.map((size,index)=><Button key={index} style={{margin:".3rem",width:"4rem"}} onClick={()=>setSelectedSize(size.value)} type={selectedSize === size.value ? "primary" : "dashed"}>{size.label}</Button>)}
                            </div>}
                            <Divider/>
                            <Button type="primary">Add to bag</Button>
                            <div className="mt-3 mb-2">
                            <Rate disabled defaultValue={2} />
                             <p>5 Customer Reviews</p>
                             <h6>Write a review</h6>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ListDetails
