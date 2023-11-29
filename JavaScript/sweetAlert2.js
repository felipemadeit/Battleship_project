export function alertIntentosRe() {
  Swal.fire({
    html: "<h2>YOU ONLY HAVE 3 ATTEMPTS!!</h2>",
    icon: "warning",
    showCancelButton: false,
    showConfirmButton: false,
    backdrop: "rgba(0, 0, 0, 0.5)",
    timer: "2500",
    background: "#2D99B7",
  });
}
