<?php

namespace App\Http\Middleware;

use Closure;

class ApiMiddleware
{
    /**
     * 对所有的api请求进行统一的处理，例如appkey的验证校验
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        return $next($request);
    }
}
