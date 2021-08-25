import React, { useCallback,useState } from "react";
import { apiService } from "services/api";
import DashboardView from "./DashboardView";

export function DashboardContainer() {
  const [isLoading,setLoading] = useState(false);
  const hccid = useCallback(async (hccid,fullname) => {    
    setLoading(true);
    const name = await apiService.postUser(hccid,fullname);
    const data = await apiService.getPrize(hccid)
    setLoading(false);
    return data
  }, []);
  const listRank = useCallback(async () => {
    const data = await apiService.getRankList();
    return data;
  })
  return (
    <div>
      <DashboardView title="Home" onHandleGetData={hccid} loading={isLoading} onHandleLoading={listRank}/>
    </div>
  );
}
