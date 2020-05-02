#ifndef CHECKABOVE_H
#define CHECKABOVE_H

#include <QDialog>

namespace Ui {
class CheckAbove;
}

class CheckAbove : public QDialog
{
    Q_OBJECT

public:
    explicit CheckAbove(QWidget *parent = nullptr);
    ~CheckAbove();

private:
    Ui::CheckAbove *ui;
};

#endif // CHECKABOVE_H
