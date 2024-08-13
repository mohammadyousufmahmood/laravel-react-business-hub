<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request){
        
        $data = $request;
        // $data = $request->validated();
        $user = User::create([

            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])

            // 'name' => 'name',
            // 'email' => 'email@eemj.com',
            // 'password' => bcrypt('pas123sword')
 
        ]);
        // $user = new User;

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
        return response('',200);

    }

    public function login(LoginRequest $request){


        $creds = $request->validated();
        if(!Auth::attempt($creds)){

            return response([
                'message' => 'provided email address or password is incorrect'
            ], 422);

        }

        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }

    public  function logout(Request $request)
    {
        $user = $request->user();

        $user->currentAcceessToken()->delete();
        return response('',204);

    }
}
