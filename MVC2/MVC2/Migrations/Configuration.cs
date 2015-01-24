namespace MVC2.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;


    using Microsoft.AspNet.Identity.EntityFramework;
    using Microsoft.AspNet.Identity;
    using MVC2.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<MVC2.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MVC2.Models.ApplicationDbContext context)
        {

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Moderator" };

                manager.Create(role);
            }

            if (!context.Users.Any(u => u.Email == "antonio.raynor@gmail.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser
                {
                    UserName = "antonio.raynor@gmail.com",
                    Email = "antonio.raynor@gmail.com",
                    FirstName = "Antonio",
                    LastName = "Raynor",
                    DisplayName = "Antonio"
                };

                manager.Create(user, "Anivr@2142");
                //manager.AddToRole(user.Id, "Admin");
                //manager.AddToRole(user.Id, "Moderator");
                manager.AddToRoles(user.Id, new string[] { "Admin", "Moderator" });

            }

            if (!context.Users.Any(u => u.Email == "bdavis@coderfoundry.com"))
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var user = new ApplicationUser
                {
                    UserName = "bdavis@coderfoundry.com",
                    Email = "bdavis@coderfoundry.com",
                    FirstName = "Bobby",
                    LastName = "Davis",
                    DisplayName = "Bobby Davis"
                };

                manager.Create(user, "password1");
                //manager.AddToRole(user.Id, "Admin");
                manager.AddToRole(user.Id, "Moderator");
                // manager.AddToRoles(user.Id, new string[] { "Admin", "Moderator" });

            }

        }
    }
}
