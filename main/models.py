from __future__   import unicode_literals

from django.db    import models

from django.utils import timezone


# Create your models here.

class Comment(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    text = models.CharField(max_length=500)

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Comment, self).save(*args, **kwargs)


    def __str__(self):
        return self.text
