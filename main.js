function nbYear(p0, percent, aug, p) {
    let time = 0
      while(p0 < p){
        p0 = Math.floor(p0 + (p0 * percent * .01) + aug)
        time++
      }
    return time
  }