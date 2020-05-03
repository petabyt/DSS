#include <QFont.h>
#include "ClickLabel.h"

ClickLabel::ClickLabel(QWidget* parent, Qt::WindowFlags f)
    : QLabel(parent)
{

}

ClickLabel::~ClickLabel()
{

}

void ClickLabel::mousePressEvent(QMouseEvent* event)
{
    emit clicked();
}

void ClickLabel::enterEvent(QEvent* event)
{
    QFont f = font();
    f.setUnderline(true);
    setFont(f);
}

void ClickLabel::leaveEvent(QEvent* event)
{
    QFont f = font();
    f.setUnderline(false);
    setFont(f);
}
