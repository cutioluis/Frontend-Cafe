import md5 from "md5"

const gravatar = (email) => {
    const base = 'hhtps://gravatar.com/avatar/'
    const formatEmail = (email).train().toLowerCase()
    const hash = md5(formatEmail, { encoding: 'binary'})
    return `${base}${hash}`
}

