cmd_Release/obj.target/galileo.node := g++ -shared -pthread -rdynamic -m32  -Wl,-soname=galileo.node -o Release/obj.target/galileo.node -Wl,--start-group Release/obj.target/galileo/src/grove_kit_addon.o Release/obj.target/galileo/src/main.o Release/obj.target/galileo/src/_globalvar.o -Wl,--end-group ../../../../cpp/grove/bin/libgrove.a /usr/lib/libupm-i2clcd.so /usr/lib/libmraa.so /usr/lib/libupm-grove.so /usr/lib/libupm-buzzer.so /usr/lib/libupm-ttp223.so /usr/lib/libupm-mic.so