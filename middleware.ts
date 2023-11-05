//applying next-auth to entire website without any matcher(matcher means next-auth should only be applied to some page)
export { default } from "next-auth/middleware"

export const config = { matcher: ["/rent/booknow"]}