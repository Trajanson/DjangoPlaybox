from django.shortcuts import render

from .models import Comment

from django.http import HttpResponse

# Create your views here.
def landing(request):
    comments = Comment.objects.all()
    context = {
        'comments': comments
    }
    return render(request, 'landing.html', context)


def register_new_comment(request):
    new_comment_text = request.POST.get('text', None)
    new_comment = Comment(text=new_comment_text)
    new_comment.save()
    return HttpResponse(new_comment_text)
