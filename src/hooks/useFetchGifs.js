import { useEffect, useState } from "react";
import { GetGif } from "../helpers/getGifs";

export const useFetchGifs=(category) => {
    const [images, setImages]= useState([]);
    const [isLoading, setisLoading] = useState(true);

    const Fn_GetImage= async() => {
        const newImages = await GetGif(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect (()=> {
        Fn_GetImage();       
        //console.log(images);
    }, []
    )

    return {
        images: images,
        isLoading: isLoading,
    }
}