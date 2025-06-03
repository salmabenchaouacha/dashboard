import { AxiosResponse } from "axios";
import axiosClient from "@/axiosClient";
import {
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

type ChartTwo = {
  data: number[],
  label: string[],
}
type ChartTwoResponse = AxiosResponse<ChartTwo>;
type FetchChartTwoResponse = ChartTwo;
type ChartTwoVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
};


const fetchChartTwoData = async ({
  start_date = '',
  end_date = '',
  service_id = ''
}: ChartTwoVariables): Promise<any> => {
 const queryString = `get_subscription_details/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}`;

  const parsed = await axiosClient.get(queryString);
  return parsed.data;
};

const useGetChartTwoStats = ({
start_date,
end_date,
service_id
}:ChartTwoVariables): UseQueryResult<
  FetchChartTwoResponse,
  Error
> =>
  useQuery<FetchChartTwoResponse, Error>({
    queryKey: ["chart-two", start_date,end_date,service_id],
    queryFn: () => fetchChartTwoData(
     { start_date,end_date,service_id}
    ),
  });


  type ChartOne = {
    data: number[],
    label: string[],
  }
  type ChartOneResponse = AxiosResponse<ChartOne>;
  type FetchChartOneResponse = ChartOne;
  type ChartOneVariables = {
    start_date: string;
    end_date: string;
    service_id: string;
  };
  
  
  const fetchChartOneData = async ({
    start_date = '',
    end_date = '',
    service_id = ''
  }: ChartOneVariables): Promise<any> => {
   const queryString = `get_subscription_count/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}`;
  
    const parsed = await axiosClient.get(queryString);
    return parsed.data;
  };
  
  const useGetChartOneStats = ({
  start_date,
  end_date,
  service_id
  }:ChartOneVariables): UseQueryResult<
    FetchChartOneResponse,
    Error
  > =>
    useQuery<FetchChartOneResponse, Error>({
      queryKey: ["chart-One", start_date,end_date,service_id],
      queryFn: () => fetchChartOneData(
       { start_date,end_date,service_id}
      ),
    });

  type ScatterVariables = {
    start_date: string;
    end_date: string;
    service_id: string;
    period: string;
  };
  
  
  const fetchScatterData = async ({
    start_date= '',
    end_date='',
    service_id= '',
    period=''
  }: ScatterVariables): Promise<any> => {
   const queryString = `get_subscription_data/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}&period=${period}`;
   
    const parsed = await axiosClient.get(queryString);
    return parsed.data;
  };
  
  const useGetScatterStats = ({
  start_date,
  end_date,
  service_id,
  period
  }:ScatterVariables): UseQueryResult<
    any,
    Error
  > =>
    useQuery<any, Error>({
      queryKey: ["Scatter", start_date,end_date,service_id,period],
      queryFn: () => fetchScatterData(
       { start_date,end_date,service_id, period}
      ),
    });
  
  
    type BarChart = {
      data: number[],
      label: string[],
    }
    type BarChartResponse = AxiosResponse<BarChart>;
    type FetchBarChartResponse = BarChart;
    type BarChartVariables = {
      start_date: string;
      end_date: string;
      service_id: string;
    };
    
    
    const fetchBarChartData = async ({
      start_date = '',
      end_date = '',
      service_id = ''
    }: BarChartVariables): Promise<any> => {
     const queryString = `get_financial_metrics/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}`;
    
      const parsed = await axiosClient.get(queryString);
      return parsed.data;
    };
    
    const useGetBarChartStats = ({
    start_date,
    end_date,
    service_id
    }:BarChartVariables): UseQueryResult<
      FetchBarChartResponse,
      Error
    > =>
      useQuery<FetchBarChartResponse, Error>({
        queryKey: ["BarChart", start_date,end_date,service_id],
        queryFn: () => fetchBarChartData(
         { start_date,end_date,service_id}
        ),
      });
    
    





      type LineRVariables = {
        start_date: string;
        end_date: string;
        service_id: string;
        periode: string;
      };
      
      
      const fetchLineRData = async ({
        start_date= '',
        end_date='',
        service_id= '',
        periode=''
      }: LineRVariables): Promise<any> => {
       const queryString = `get_revenue_trends/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}&periode=${periode}`;
       
        const parsed = await axiosClient.get(queryString);
        return parsed.data;
      };
      
      const useGetLineRStats = ({
      start_date,
      end_date,
      service_id,
      periode
      }:LineRVariables): UseQueryResult<
        any,
        Error
      > =>
        useQuery<any, Error>({
          queryKey: ["LineR", start_date,end_date,service_id,periode],
          queryFn: () => fetchLineRData(
           { start_date,end_date,service_id, periode}
          ),
        });
     


        type ScatterJVariables = {
          start_date: string;
          end_date: string;
          service_id: string;
          periode: string;
        };
        
        
        const fetchScatterJData = async ({
          start_date= '',
          end_date='',
          service_id= '',
          periode=''
        }: ScatterJVariables): Promise<any> => {
         const queryString = `get_revenue_data/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}&periode=${periode}`;
         
          const parsed = await axiosClient.get(queryString);
          return parsed.data;
        };
        
        const useGetScatterJStats = ({
        start_date,
        end_date,
        service_id,
        periode
        }:ScatterJVariables): UseQueryResult<
          any,
          Error
        > =>
          useQuery<any, Error>({
            queryKey: ["ScatterJ", start_date,end_date,service_id,periode],
            queryFn: () => fetchScatterJData(
             { start_date,end_date,service_id, periode}
            ),
          });


          type ChartBar = {
            data: number[],
            label: string[],
          }
          type ChartBarResponse = AxiosResponse<ChartBar>;
          type FetchChartBarResponse = ChartBar;
          type ChartBarVariables = {
            start_date: string;
            end_date: string;
            service_id: string;
          };
          
          
          const fetchChartBarData = async ({
            start_date = '',
            end_date = '',
            service_id = ''
          }: ChartBarVariables): Promise<any> => {
           const queryString = `calculate_retention_rates/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}`;
          
            const parsed = await axiosClient.get(queryString);
            return parsed.data;
          };
          
          const useGetChartBarStats = ({
          start_date,
          end_date,
          service_id
          }:ChartBarVariables): UseQueryResult<
            FetchChartBarResponse,
            Error
          > =>
            useQuery<FetchChartBarResponse, Error>({
              queryKey: ["chartBar", start_date,end_date,service_id],
              queryFn: () => fetchChartBarData(
               { start_date,end_date,service_id}
              ),
            });

            type LineChartVariables = {
              start_date: string;
              end_date: string;
              service_id: string;
              periode: string;
            };
            
            
            const fetchLineChartData = async ({
              start_date= '',
              end_date='',
              service_id= '',
              periode=''
            }: LineRVariables): Promise<any> => {
             const queryString = `calculate_unsubscribe_rate/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}&periode=${periode}`;
             
              const parsed = await axiosClient.get(queryString);
              return parsed.data;
            };
            
            const useGetLineChartStats = ({
            start_date,
            end_date,
            service_id,
            periode
            }:LineChartVariables): UseQueryResult<
              any,
              Error
            > =>
              useQuery<any, Error>({
                queryKey: ["LineChart", start_date,end_date,service_id,periode],
                queryFn: () => fetchLineChartData(
                 { start_date,end_date,service_id, periode}
                ),
              });
                    
              

              type MixedVariables = {
                start_date: string;
                end_date: string;
                service_id: string;
                periode: string;
              };
              
              
              const fetchMixedData = async ({
                start_date= '',
                end_date='',
                service_id= '',
                periode=''
              }: MixedVariables): Promise<any> => {
               const queryString = `get_data/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}&periode=${periode}`;
               
                const parsed = await axiosClient.get(queryString);
                return parsed.data;
              };
              
              const useGetMixedStats = ({
              start_date,
              end_date,
              service_id,
              periode
              }:MixedVariables): UseQueryResult<
                any,
                Error
              > =>
                useQuery<any, Error>({
                  queryKey: ["Mixed", start_date,end_date,service_id,periode],
                  queryFn: () => fetchMixedData(
                   { start_date,end_date,service_id, periode}
                  ),
                });
                      
                   type Bar = {
                    data: number[],
                    label: string[],
                  }
                  type BarResponse = AxiosResponse<Bar>;
                  type FetchBarResponse = Bar;
                  type BarVariables = {
                    start_date: string;
                    end_date: string;
                    service_id: string;
                  };
                  
                  
                  const fetchBarData = async ({
                    start_date = '',
                    end_date = '',
                    service_id = ''
                  }: BarVariables): Promise<any> => {
                  const queryString = `get_chart_data/?start_date=${start_date}&end_date=${end_date}&service_id=${service_id}`;
                  
                    const parsed = await axiosClient.get(queryString);
                    return parsed.data;
                  };
                  
                  const useGetBarStats = ({
                  start_date,
                  end_date,
                  service_id
                  }:BarVariables): UseQueryResult<
                    FetchBarResponse,
                    Error
                  > =>
                    useQuery<FetchBarResponse, Error>({
                      queryKey: ["Bar", start_date,end_date,service_id],
                      queryFn: () => fetchBarData(
                      { start_date,end_date,service_id}
                      ),
                    });            
            
        
  export {
    useGetLineRStats,
  useGetChartTwoStats,
  useGetScatterStats,
  useGetBarChartStats,
  useGetChartOneStats,
  useGetScatterJStats ,
  useGetChartBarStats ,
  useGetLineChartStats,
  useGetMixedStats,
  useGetBarStats,
};
