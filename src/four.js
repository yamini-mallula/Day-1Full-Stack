function F4(){
  //  const arr=['yamu','vinnu','chimu'];
      //  return(
            // <>
            //  {arr.map((item)=>(
            //     <h1>{item}</h1>
            //  ))}
             // </>
       
      //  )
    

      const a=[1,2,3,4];
      const list=a.map((a,index)=> <li key={index}>{a}</li>);
      return(
        <div>
            <h1>{list}</h1>
        </div>
      )
}
export default F4;
