const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    let ans = blogs.reduce((n, {likes}) => n + likes,0)
    return ans
}
  
module.exports = {
dummy, totalLikes
}