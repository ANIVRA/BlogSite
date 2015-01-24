using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MVC2.Models;

namespace MVC2.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Author")]
        public string AuthorId { get; set; }
        public virtual ApplicationUser Author { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd MMM}",
               ApplyFormatInEditMode = true)]
        public DateTimeOffset Created { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd MMM}",
               ApplyFormatInEditMode = true)]
        public Nullable<DateTimeOffset> Updated { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string MediaURL { get; set; }

        public Post()
        {
            this.Comments = new HashSet<Comment>();
        }
        public virtual ICollection<Comment> Comments { get; set; }
    }


    public class Comment
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("ParentPost")]
        public int PostId { get; set; }
        public virtual Post ParentPost { get; set; }
        [ForeignKey("Author")]
        public string AuthorId { get; set; }
        public virtual ApplicationUser Author { get; set; }
        public string Body { get; set; }
        public DateTimeOffset Created { get; set; }
        public Nullable<DateTimeOffset> Updated { get; set; }
        public string UpdateReason { get; set; }

    }
}