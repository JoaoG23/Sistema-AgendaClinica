export function navigateToPageAfterSelectedTime(navigate: any, path:string | number, time:number = 2000) {
    setTimeout(() => {
      
      navigate(path);
    }, time);
  }
  