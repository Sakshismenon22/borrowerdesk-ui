import{get,post,orgUrl}from'./apiClient';
const base=orgUrl('');
export const feesRebatesApi={
 overview:({page=0,size=200,tab='ALL',loanId,q}={})=>get(base+'/lendesk/fees-rebates/overview?'+new URLSearchParams({page:String(page),size:String(size),tab,...(loanId?{loanId:String(loanId)}:{}),...(q?{q}:{})})),
 run:(loanId,kind,clientRequestId)=>post(base+'/loans/'+loanId+'/'+(kind==='FEE'?'fees':'rebates')+'/accrual-runs',{clientRequestId}),
 runBatch:(kind,loanIds,clientRequestId)=>post(base+'/'+(kind==='FEE'?'fees':'rebates')+'/accrual-runs',{loanIds,clientRequestId}),
 runStatus:id=>get(base+'/accrual-runs/'+id)
};
