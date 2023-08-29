<script lang="ts">
  let cursor: HTMLElement;
  let array = document.querySelectorAll("a");

  let mouseInLink = false;
  let mouseHoverClass = "scale-[.8] rounded-xl";

  function linkHandlerEnter() {
    mouseInLink = true;
  }
  function linkHandlerExit() {
    mouseInLink = false;
  }

  array.forEach((item) => {
    item.addEventListener("mouseenter", linkHandlerEnter);
    item.addEventListener("mouseleave", linkHandlerExit);
  });
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  let showCursor = !isTouchDevice();

  window.addEventListener("mousemove", (e) => {
    if (!cursor) return;
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });

  let mouseDownClass = "scale-[1.8] rounded-xl";

  let mouseDownState = false;
  window.addEventListener("mousedown", (e) => {
    if (!cursor) return;
    mouseDownState = true;
  });

  window.addEventListener("mouseup", (e) => {
    if (!cursor) return;
    mouseDownState = false;
  });
</script>

<div
  bind:this={cursor}
  class={`fixed z-[999] pointer-events-none ${showCursor ? "block" : "hidden"}`}
>
  <div
    class={`rounded-md h-5 w-5 -translate-y-1/2 -translate-x-1/2 origin-center duration-200 backdrop-invert ${
      mouseDownState && mouseDownClass
    } ${mouseInLink && mouseHoverClass}`}
  />
</div>

<style>
</style>
