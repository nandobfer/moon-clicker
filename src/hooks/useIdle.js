export const useIdle = () => {
    const onExit = () => {
        const exited = Date.now()
        console.log(exited)
        return exited
    }
    const onEnter = (exited, moonPassive) => {
        const now = Date.now()
        const seconds = Math.round((now - exited) / 1000)
        console.log(now)
        console.log(`idle: ${seconds}`)
        moonPassive(seconds/2)
    }

    return { onExit, onEnter }
}