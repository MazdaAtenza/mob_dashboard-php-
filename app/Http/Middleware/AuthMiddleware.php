<?php

namespace App\Http\Middleware;

use Closure;
class AuthMiddleware
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /**
         * 1、检测 $_COOKIE['mob_session_key'] 是否设置
         * 2、检测 $_COOKIE['mob_session_key']的值是否存在redis里面
         */
        if (!isset($_COOKIE['mob_session_key'])) {
            //return response(["status" => 401 , "msg" => "未授权"], 401);
        }

        return $next($request);
    }
}
