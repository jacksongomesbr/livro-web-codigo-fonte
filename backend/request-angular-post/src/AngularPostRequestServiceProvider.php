<?php
//https://github.com/gonzalo123/AngularPostRequestServiceProvider
namespace Lpweb;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Silex\ServiceProviderInterface;

class AngularPostRequestServiceProvider implements ServiceProviderInterface
{
    public function register(Application $app)
    {
        $app->before(function (Request $request) {
            if ($this->isRequestTransformable($request)) {
                $transformedRequest = $this->transformContent($request->getContent());
                $request->request->replace($transformedRequest);
            }
        });
    }
    public function boot(Application $app)
    {
    }
    private function transformContent($content)
    {
        return json_decode($content, true);
    }
    private function isRequestTransformable(Request $request)
    {
        return 0 === strpos($request->headers->get('Content-Type'), 'application/json');
    }
}
