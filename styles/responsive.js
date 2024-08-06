//  scale, verticalScale, moderateScale

import { moderateScale, scale, verticalScale } from "react-native-size-matters"

// tỷ lệ kích thước theo chiều ngang của thiết bị.
//
export const rScale = (size) =>{ 
    return scale(size)
}

// tỷ lệ kích thước theo chiều dọc của thiết bị.
//
export const rVerScale = (size) =>{ 
    return verticalScale(size)
}


//  tỷ lệ kích thước với mức độ vừa phải giữa scale và verticalScale.
//
export const rMS = (size, factor) =>{
    return moderateScale(size,factor)
}