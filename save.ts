const product:any = [

];

function add(data:any){
product.push(data);
console.log("add " ,product)

}

export function get(){
    console.log('hi')
    console.log("get",product)
    return product;
}


export function getpro(id:string){
    let sp= product.filter((ele:any)=>ele.id===id)
    console.log('sp',sp)     
    //return sp;
}
export function delpro(id:string){
    let sdp= product.filter((ele:any)=>ele.id!==id)
    console.log("deleted",sdp)

}
export function update(id:string,name:any){
    //let sdp= product.filter((ele:any)=>ele.id!==id)
   let  objIndex = product.findIndex((obj:any) => obj.id === id);
   console.log("update",objIndex)
   product[objIndex].name = name
}


export default add;
