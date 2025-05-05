This document shows an outline on conventions we stuck to when creating the code for the project.
It is not a strict guideline, but it is recommended to follow these conventions to keep the code clean and readable. 
Especially considering certain words have different connotations to different users, the document aims to promote universality. 

# 1. CSS Conventions
    1.1. The primary CSS convention system followed was BEM. (Blocks, Elements, Modifiers).
        Where a block is the largest unit, any nested sub-units of a block will be an element denoted by putting __ before the class, and any modifers of an element is denoted by putting -- before the class.
        Eg: A card would have class 'card' as a block, the text nested inside card will be 'card__text' and date inside the card will be a 'card__date' element, this element can be modified by doing'card__text--english' or 'card__text--dhivehi', where each modifer will have different CSS.

    1.2. There is some Atomic CSS usage aswell.

    1.3. When naming fonts, IDs, classes with 2 or more words, add a hyphen between the words.
        Eg: The font 'outfit-semi-bold' or a class 'landing-page-section' 



# 2. Definitions & Terms
    2.1. The following words are used to refer to their specific elements, if any classes are to be written on such an element, it should include those names (such as card__title if the element is deemed to be a title):
    
        Heading: The large text above a specific section. (Not to be confused with ``<header>``)
            Eg: 'Latest News' in homepage is a heading

        Title: "Suruhee" of a writing, News etc. Basically the name of the thing. Smaller than heading.
            Eg: 'Jalaluddin School announces new project' is a title of a news. Would be under a heading.

    2.2: We follow almost all semantic tag guidlines. The following are some common ones to keep in mind:

        <section>: Area which showcases Any conceivably different idea from the one above it. Largest nester.
            Eg: 'Alumni Testimonials' in the homepage is the largest area showing the alumni part. When using CSS, this whole area will hence be reffered to as 'alumni-section'.

        <header>: The top part of a website, including navigation links, logo, search etc... Semantic major top area.
            Eg: Header of homepage includes the JS logo, all navigation links, social media links
        
        <nav>: A list of links used for navigation. Smaller than header. Essentially a child of header.
            Eg: The links in the header of homepage are all considered 'navbar'

        *Note: Although the above definition specifies otherwise, the header tag was consistently labeled with the '.navbar' class during the homepage development. This was due to our familiarity with the term at the time—not because it was technically correct. However, since we've grown comfortable with this convention, we have decided to keep this one exception as is*

        <article>: Any standalone piece of content that could be reproduced elsewhere, or would make sense on its own, usually including generally article-like children inside like date, title, description
            Eg: Cards are generally all article tags, unless they are just for presentational or design purposes, in which case it will be a div. A more obvious example would be a literal article.

# 3. Text & Font sizes
    3.1. All font sizes are to be written in rem, unless it is considered difficult, such as in position absolute shapes or otherwise.

    3.2. All text should be within h1, h2 tags aswell as p tags. Text should not stand alone on a div tag, unless considered difficult. This is to aid in keyboard navigation.

    3.3. Below are the standard font sizes:
    Default text size: 1rem (16px)
    Secondary/Caption level text size:
    To be determined