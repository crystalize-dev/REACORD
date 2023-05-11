import classNames from "classnames";

export const getStatus = (cl, status) => {
    switch (status) {
        case 'online':
            return classNames(cl.status, cl.online)
        case 'sleep':
            return classNames(cl.status, cl.sleep)
        case 'offline':
            return classNames(cl.status, cl.offline)
        default:
            return classNames(cl.status)
    }
}

export const getStatusHint = (status) => {
    switch (status) {
        case 'online':
            return 'В сети'
        case 'sleep':
            return 'Отошёл'
        default:
            return 'Не в сети'
    }
}