
export interface F {
    (): () => void
    cancel: () => void
}

/**
 * 节流函数
 * @param fn 要执行的函数
 * @param ms 要控制的节流时间
 */
export function throttle (fn: ()=>void,ms: number = 0):F{
    let timer:any, lastTime:number, inThrottle:any
    
    const throttled:any = (...args:any[])=>{
        if(!inThrottle){
            fn.apply(this,args)
            lastTime = Date.now()
            inThrottle = true
        }else{
            clearTimeout(timer)
            timer = setTimeout(function(){
                if((Date.now()-lastTime)>ms){
                    fn.apply(this,args)
                    lastTime = Date.now()
                }
            },ms - (Date.now()-lastTime))
        }
    }

    throttled.cancel = ()=>{
        if(timer)clearTimeout(timer)
    }

    return throttled
}
/**
 * 防抖函数
 * 当内置的callback被触发，立即取消上一个函数的执行
 * @param fn 
 * @param ms 
 */
export function debounce (fn:()=>void,ms: number = 0):F{
    let timer:any
    const debounced:any = (...args:any[])=>{
        clearTimeout(timer)
        timer = setTimeout(fn.apply(this,args),ms)
    }
    debounced.cancel = ()=>clearTimeout(timer)
    return debounced
}

/**
 * 获取clientHeight
 * clientHeight/Width包括content与padding
 * FYI:offsetHeight/Width包括滚动条和border
 */
export function getElementHeight(element: HTMLElement | Window): number {
    return element instanceof HTMLElement?element.clientHeight:window.innerHeight
}
  
export function getWindowScrollPos() {
	if (window.scrollY !== undefined) {
		// Modern browser
		return window.scrollY
	} else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
		// IE support.
		return document.documentElement.scrollTop
	}
	return 0
}
  
  export function getRelativeScrollTop(element: HTMLElement | Window): number {
    if (element instanceof HTMLElement) {
      return element.scrollTop - element.getBoundingClientRect().top
    }
    return getWindowScrollPos()
  }
  
  export function getScrollHeight(element: HTMLElement | Window): number {
    if (element instanceof HTMLElement) {
      return element.scrollHeight
    }
  
    return (document.documentElement || document.body).scrollHeight
  }
  
  export function getScrollPos(element: HTMLElement | Window): number {
    if (element instanceof HTMLElement) {
      return element.scrollTop
    }
    return getWindowScrollPos()
  }