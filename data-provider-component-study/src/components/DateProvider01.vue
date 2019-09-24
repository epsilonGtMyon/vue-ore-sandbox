<script>
export default {
  data: () => ({
    loading: false,
    text: '',
  }),

  mounted() {
    //とりあえず今回はタイムアウトで適当な値をセットするだけとした。
    //どこか別のサーバーやlocalstorageなどから取ってくることもできるかな
    setTimeout(() => {
      this.loading = true
      this.text = 'ロード完了'
    }, 3000)
  },
  render(createElement) {
    //$scopedSlotsの中には各slotが含まれている、またスロットは関数になっている。
    //ここからdefaultスロットを用いる、その際slotへのパラメータを渡す事ができる。
    const defaultSlot = this.$scopedSlots.default({
      loading: this.loading,
      text: this.text,
    })
    //defaultSlotは配列なのでこれをそのまま描画する。
    //こうすることで,このエレメントをdivなどでラップする必要がなくなる。
    //ただしできるのは単一のエレメントだけ
    return defaultSlot[0]
  },
}
</script>