

export const Grouped=(comments)=>{
    const commObj={}
    let Allcomm=[]
    comments.map((x)=>{
        return  commObj[x._id]=x
    })


    for (const comment of comments) {
        let exist=commObj[comment.parentid]
        if (exist) {
            exist.children.push(comment)
            
        }else{
            Allcomm.push(comment)

        }
        
    }

    return Allcomm

    

}