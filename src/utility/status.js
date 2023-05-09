import classNames from "classnames";

export const getStatus = (cl, status) => {
    switch (status) {
        case 'online':
            return classNames(cl.status, cl.online)
        case 'sleep':
            return classNames(cl.status, cl.sleep)
        default:
            return classNames(cl.status, cl.offline)
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