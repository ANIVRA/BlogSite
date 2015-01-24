using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC2.Startup))]
namespace MVC2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
