import { createClient } from "@supabase/supabase-js";

const supabase =createClient("https://vzkmtbdcbuxxtsmnjwcl.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6a210YmRjYnV4eHRzbW5qd2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMDEwMzMsImV4cCI6MjA1OTU3NzAzM30.8ANyv1F_-jDYIar7MYjJS3kxqxGaZ8Dy5FMDN9Xe_ZA")


export default function MeadiaUpload(file){
    const promise = new Promise(

        (resolve,reject)=>{
            if(file==null){
                reject("file is null")
            }
            const timeStamp = new Date().getTime()
            const newFileName = file.name+timeStamp

            supabase.storage.from("images").upload(newFileName,file,{
                cacheControl:"3600",
                upsert:false
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                (err)=>{
                    console.log(err)
                    reject("file not uploaded")
                }
            )

        }


    )
    return promise
    
}