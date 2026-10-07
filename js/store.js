const LARA_STORE_API = "https://atswttlqjycruzxuohfw.supabase.co/functions/v1/store-api";
function laraVisitorKey(){
  let k=localStorage.getItem("lara_visitor_key");
  if(!k){
    const b=new Uint8Array(24); crypto.getRandomValues(b);
    k=Array.from(b,x=>x.toString(16).padStart(2,"0")).join("");
    localStorage.setItem("lara_visitor_key",k);
  }
  return k;
}
async function laraApi(body){
  const r=await fetch(LARA_STORE_API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
  if(!r.ok) throw new Error(await r.text());
  return r.json();
}
async function laraStats(){
  const r=await fetch(LARA_STORE_API);
  if(!r.ok) throw new Error("stats");
  return r.json();
}
async function laraTrackDownload(appId){return laraApi({action:"download",app_id:appId,visitor_key:laraVisitorKey()})}
async function laraRate(appId,stars){return laraApi({action:"rating",app_id:appId,visitor_key:laraVisitorKey(),stars:Number(stars)})}
async function laraReview(appId,body){return laraApi({action:"review",app_id:appId,visitor_key:laraVisitorKey(),body:body.trim()})}
async function laraReviews(appId){return laraApi({action:"reviews",app_id:appId,visitor_key:laraVisitorKey()})}
function laraFormatDate(v){try{return new Intl.DateTimeFormat("id-ID",{dateStyle:"medium"}).format(new Date(v))}catch(e){return ""}}
