function createShadow(ctx){
   return `${ctx == "white"
    ? "rgb(210,210,210)" 
    : "white"} 1px 0 10px`
};

export default createShadow