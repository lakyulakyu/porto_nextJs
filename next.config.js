module.exports={
  
    async rewrites(){
        return[
        {
            source:'/produk',
            destination:'/Home/produk',
        },
        {
            source:'/Profile',
            destination:'/Home/profile',
        },
        {
            source:'/about',
            destination:'/Home/about',
        },
       
    ]
}

};