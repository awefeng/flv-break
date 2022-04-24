class Player {
  private ref
  constructor(ref: React.MutableRefObject<HTMLVideoElement | null>) {
    this.ref = ref
    console.log('拿到了ref', ref)
  }
  getOptions() {
    console.log(this.ref)
    return { name: 'aa' }
  }
}

export default Player
