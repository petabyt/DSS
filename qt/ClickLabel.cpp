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
    setStyleSheet("text-decoration: underline");
}

void ClickLabel::leaveEvent(QEvent* event)
{
    setStyleSheet("");
}
