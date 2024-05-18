declare const useLocalization: (fileName: string) => {
    t: string;
    rt: (text: string, variables: Record<string, any>) => string;
};
export default useLocalization;
