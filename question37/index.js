//question 37
// Large Shirts: Modify the make_shirt() function ()
function make_shirts(size, color, message) {
    if (size === void 0) { size = "large"; }
    if (color === void 0) { color = "red "; }
    if (message === void 0) { message = "i love pakistan."; }
    console.log("customize a ".concat(size, " t_shirt in ").concat(color, " color with the message \"").concat(message, "\""));
}
;
make_shirts();
make_shirts("small");
make_shirts("medium,blue", "i love pakistan");
