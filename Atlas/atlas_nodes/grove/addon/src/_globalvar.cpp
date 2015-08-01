/* ----------------------------------------------------------------------------
 * This file was automatically generated by io-js-autogen Version 0.0.1
 *
 * Do not make changes to this file unless you know what you are doing--modify the
 * C header file instead.
 * ----------------------------------------------------------------------------- */
#include "_globalvar.h"
#include <map>
#include "stdlib.h"

Persistent<Function> cbArray[5];

std::map <void *, Persistent<Object> > CClassToJsObjMap;
std::map <void *, Persistent<Object> >::iterator iter;
Persistent<Object> JSObj;


void cbFunc0(char * arg0) {
    HandleScope scope;
    const unsigned argc = 1;
    Local<Value> argv[argc];

    argv[0] = v8::String::New((char*)arg0);
    
    cbArray[0]->Call(Context::GetCurrent()->Global(), argc, argv);
    
    
    int idx0;
    int len0;
    if (argv[0]->IsString()) {
        v8::String::AsciiValue argv0_at(argv[0]->ToString());
        
        strcpy(arg0, *argv0_at);
    } else {
        Local<Array> argv0_at = Local<Array>::Cast(argv[0]);
        len0 = argv0_at->Length() + 1;
        
        for (idx0 = 0; idx0 < len0 - 1; idx0++) {
            Local<Value> argv0_a = argv0_at->Get(idx0);
            V8_ASSERT(!argv0_a->IsNull() && argv0_a->IsInt32(), "arg0[%d] parameter error", idx0);
            arg0[idx0] = (char)argv0_a->IntegerValue();
        }
        arg0[idx0] = 0;
    }
    

    return;
}

void cbFunc1(int arg0) {
    HandleScope scope;
    const unsigned argc = 1;
    Local<Value> argv[argc];

    argv[0] = Int32::New(arg0);
    
    cbArray[1]->Call(Context::GetCurrent()->Global(), argc, argv);
    
    

    return;
}

void cbFunc2(float arg0) {
    HandleScope scope;
    const unsigned argc = 1;
    Local<Value> argv[argc];

    argv[0] = Number::New(arg0);
    
    cbArray[2]->Call(Context::GetCurrent()->Global(), argc, argv);
    
    

    return;
}

void cbFunc3(int arg0) {
    HandleScope scope;
    const unsigned argc = 1;
    Local<Value> argv[argc];

    argv[0] = Int32::New(arg0);
    
    cbArray[3]->Call(Context::GetCurrent()->Global(), argc, argv);
    
    

    return;
}

void cbFunc4(int arg0) {
    HandleScope scope;
    const unsigned argc = 1;
    Local<Value> argv[argc];

    argv[0] = Int32::New(arg0);
    
    cbArray[4]->Call(Context::GetCurrent()->Global(), argc, argv);
    
    

    return;
}
